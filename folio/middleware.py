import geoip2.database
from geoip2.errors import AddressNotFoundError
from .models import Visit

from portfolio.settings import BASE_DIR
try:
    from django.utils.deprecation import MiddlewareMixin
except ImportError:
    MiddlewareMixin = object

isp_reader = geoip2.database.Reader(BASE_DIR + '/folio/geo_ip/GeoIP2-ISP.mmdb')
country_reader = geoip2.database.Reader(BASE_DIR + '/folio/geo_ip/GeoLite2-City.mmdb')


class CambridgeAnalytic(MiddlewareMixin):
    def process_request(self, request):
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        if x_forwarded_for:
            ip = x_forwarded_for.split(',')[0]
        else:
            ip = request.META.get('REMOTE_ADDR')
        request.ip_address = ip
        try:
            isp = isp_reader.isp(ip).isp
        except:
            isp = 'Unknown'

        try:
            data = country_reader.city(ip)
            country, city = data.country.name, data.city.name
        except:
            country, city = ['Unknown']*2
        referer = request.META.get('HTTP_REFERER', 'Unknown')

        if country is None:
            country = 'Unknown'
        if city is None:
            city = 'Unknown'
        if isp is None:
            isp = 'Unknown'
        Visit(
            ip=ip,
            isp=isp,
            country=country,
            city=city,
            referer=referer,
            device=request.user_agent.device.family,
            os='%s %s' % (request.user_agent.os.family, request.user_agent.os.version_string),
            browser='%s %s' % (request.user_agent.browser.family, request.user_agent.browser.version_string)
        ).save()
