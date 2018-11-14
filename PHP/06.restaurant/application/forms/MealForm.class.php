<?php

/**
 * Created by PhpStorm.
 * User: DEHEM-NOYON
 * Date: 13/11/2018
 * Time: 09:38
 */
class MealForm extends Form {

    function build() {
        $this->addFormField("name");
        $this->addFormField("description");
        $this->addFormField('quantity');
        $this->addFormField('buyPrice');
        $this->addFormField('salePrice');

    }
}