<?php

$app = new \Slim\App();


$container = $app->getContainer();

$container['view'] = function ($container) {
    return new \Slim\Views\PhpRenderer(dirname(__DIR__) . '/views/');
};

$app->add(new Core());

include dirname(__DIR__) . '/routes/autoload.php';

$app->run();

?>
