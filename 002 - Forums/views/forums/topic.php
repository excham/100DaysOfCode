<!DOCTYPE html>
<html>
  <?php include dirname(__DIR__) . '/template/head.php' ?>
  <body>
    <?php include dirname(__DIR__) . '/template/nav.php' ?>
    <div class="container">
      <br>
      <div class="card">
        <div class="card-content">
          <h3 class="title is-3">This is my topic!</h3>
        </div>
      </div>
      <?php for ($i=0; $i < 15; $i++) {
        if ($i == 1) {
          ?>
          <span style="display: inline-block; padding: 15px 0px;">498 replies</span>
          <nav class="pagination is-small is-pulled-right" style="margin-top: 10px;" role="navigation" aria-label="pagination">
            Page&nbsp;&nbsp;
            <ul class="pagination-list">
              <li><a class="button pagination-link" aria-label="Goto page 1">1</a></li>
              <li><span class="pagination-ellipsis">&hellip;</span></li>
              <li><a class="button pagination-link" aria-label="Goto page 45">45</a></li>
              <li><a class="button pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li>
              <li><a class="button pagination-link" aria-label="Goto page 47">47</a></li>
              <li><span class="pagination-ellipsis">&hellip;</span></li>
              <li><a class="button pagination-link" aria-label="Goto page 86">86</a></li>
            </ul>
          </nav>
          <?php
        }
        ?>
        <div class="card">
          <div class="card-content">
            <div class="columns">
              <div class="column is-1 has-text-centered">
                <a href="/u/excham">
                  <img src="https://crafatar.com/avatars/excham?size=80" alt="">
                  <span>excham</span>
                </a>
              </div>
              <div class="column is-11">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <hr style="margin: 5px 0px;">
                <span>
                  148 likes
                  &middot;
                  3 dislikes
                </span>
                <span class="is-pulled-right">
                  3 days ago
                  &nbsp;
                  <a href="#">report</a>
                  &nbsp;
                  <a href="#">permalink</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      <?php } ?>
      <br>
      <nav class="pagination is-centered" role="navigation" aria-label="pagination">
        <a class="pagination-previous">Previous</a>
        <a class="pagination-next">Next page</a>
        <ul class="pagination-list">
          <li><a class="pagination-link" aria-label="Goto page 1">1</a></li>
          <li><span class="pagination-ellipsis">&hellip;</span></li>
          <li><a class="pagination-link" aria-label="Goto page 45">45</a></li>
          <li><a class="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li>
          <li><a class="pagination-link" aria-label="Goto page 47">47</a></li>
          <li><span class="pagination-ellipsis">&hellip;</span></li>
          <li><a class="pagination-link" aria-label="Goto page 86">86</a></li>
        </ul>
      </nav>
    </div>
    <?php include dirname(__DIR__) . '/template/footer.php' ?>
  </body>
  <?php include dirname(__DIR__) . '/template/scripts.php' ?>
</html>
