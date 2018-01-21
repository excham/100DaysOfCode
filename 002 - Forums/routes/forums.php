<?php

$app->get('/forums', function ($request, $response, $args) {
  return $this->view->render($response, 'forums/index.php', [
      'site' => $request->getAttribute('config')
  ]);
});

?>
