<?php
if(!defined('DS')) {
    define('DS', DIRECTORY_SEPARATOR);
}

define('APP_PATH', realpath(dirname(__FILE__)) . DS );
define('VIEWS_PATH', APP_PATH . DS . 'views' . DS);
