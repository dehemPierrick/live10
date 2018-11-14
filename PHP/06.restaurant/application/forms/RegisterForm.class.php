<?php

/**
 * Created by PhpStorm.
 * User: DEHEM-NOYON
 * Date: 07/11/2018
 * Time: 13:55
 */
class RegisterForm extends Form {
    function build() {
        $this->addFormField('firstName');
        $this->addFormField('lastName');
        $this->addFormField('email');
        $this->addFormField('password');
        $this->addFormField('phone');
        $this->addFormField('address');
        $this->addFormField('city');
        $this->addFormField('zipCode');
    }
}