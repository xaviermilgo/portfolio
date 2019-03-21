COPY public.folio_project (id, title, description, link, image, imagephone, "LIVE", repolink) FROM stdin;
7	Password locker	Securely store your credentials using a master key.		projects/Screenshot_at_2018-08-18_22-03-47.png	phoneprojects/passlockerphone.png	f	https://github.com/reivhax/Pass-Locker
6	Chimay red Tiny	Minimised exploit for mikrotik routers		projects/chimaylarge.png	phoneprojects/chimaysmall.png	f	https://github.com/reivhax/Chimay-Red-tiny
5	Terracloner	Super fast multithreaded Git clones		projects/terralarge.png	phoneprojects/terrasmall.png	f	https://github.com/reivhax/TerraCloner
2	Not-instagram	This is an instagram made with django	https://not-instagram.herokuapp.com	projects/instalarge.png	phoneprojects/instaphone.png	t	https://github.com/reivhax/Not-Instagram
3	One minute pitch	A website that allows you to post pitches and to react to others.	http://minutepitch.herokuapp.com/	projects/minutelarge.png	phoneprojects/minutephone.png	t	https://github.com/reivhax/One-minute-pitch
4	Image share	A website for you to share images to people interested in you.	https://xaviergallery.herokuapp.com/	projects/imagesharelarge.png	phoneprojects/imagesharephone.png	t	https://github.com/reivhax/imageshare
\.

COPY public.folio_skill (id, name, img) FROM stdin;
1	Python	python.png
2	Angular Js	angular_1.png
3	Django	django.png
4	Javascript	js.png
5	Html	html.png
6	Css	css.png
7	Security analysis	pentest_IUzG3z8.png
8	Flask	flask1.png
\.

COPY public.folio_project_skills (id, project_id, skill_id) FROM stdin;
1	7	1
2	6	1
3	6	7
4	5	1
5	4	1
6	4	4
7	4	5
8	4	6
9	3	1
10	3	4
11	3	5
12	3	6
13	2	1
14	2	3
15	2	4
16	2	5
17	2	6
18	3	8
19	4	8
\.

