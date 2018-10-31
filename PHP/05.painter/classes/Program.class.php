<?php


class Program {

    function __construct(Renderer $renderer) {
        $oreilleG = new EllipseShape();
        $oreilleG->setLocation(580, 150);
        $oreilleG->setColor("#ffe1e7");
        $oreilleG->setSize(50, 150);

        $oreilleD = new EllipseShape();
        $oreilleD->setLocation(720, 150);
        $oreilleD->setColor("#ffe1e7");
        $oreilleD->setSize(50, 150);

        $oreilleInG = new EllipseShape();
        $oreilleInG->setLocation(580, 150);
        $oreilleInG->setColor("pink");
        $oreilleInG->setSize(30, 100);

        $oreilleInD = new EllipseShape();
        $oreilleInD->setLocation(720, 150);
        $oreilleInD->setColor("pink");
        $oreilleInD->setSize(30, 100);

        $visage = new CircleShape();
        $visage->setColor("#ffe1e7");
        $visage->setLocation(650, 300);

        $oeilG = new CircleShape();
        $oeilG->setColor("black");
        $oeilG->setLocation(600, 270);
        $oeilG->setSize(20);

        $oeilD = new CircleShape();
        $oeilD->setColor("black");
        $oeilD->setLocation(700, 270);
        $oeilD->setSize(20);

        $nez = new TriangleShape();
        $nez->setLocation(620, 300, 680, 300, 650, 350);
        $nez->setColor("pink");


        $renderer->addShape($oreilleG);
        $renderer->addShape($oreilleD);
        $renderer->addShape($oreilleInG);
        $renderer->addShape($oreilleInD);
        $renderer->addShape($visage);
        $renderer->addShape($oeilG);
        $renderer->addShape($oeilD);
        $renderer->addShape($nez);
    }
}