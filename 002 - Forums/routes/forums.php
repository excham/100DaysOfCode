<?php

$app->get('/forums', function ($request, $response, $args) {
  return $this->view->render($response, 'forums/index.php', [
      'site' => $request->getAttribute('config')
  ]);
});

$app->get('/t/{id}', function ($request, $response, $args) {
  return $this->view->render($response, 'forums/topic.php', [
      'site' => $request->getAttribute('config')
  ]);
});

?>
