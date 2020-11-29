import React from 'react';
import { hydrate, render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import PortFolio from "./Portfolio";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
    hydrate(<PortFolio />, rootElement);
} else {
    render(<PortFolio />, rootElement);
}
