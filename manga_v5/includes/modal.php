<?php
function modalError()
{
    if (!empty($_REQUEST['Message'])) {
        echo sprintf('
            <div id="modal-error" class="modal">
                <div class="modal-content">
                    <div class="modal-header">
                        <span class="close-modal">&times;</span>
                        <h2>Erreur !</h2>
                    </div>
                    <div class="modal-body">
                        <p>%s</p>
                    </div>
                </div>

            </div>', $_REQUEST['Message']);
    }
}
?>