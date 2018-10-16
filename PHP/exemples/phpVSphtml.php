<?php
// simulation du fichier INDEX.PHP


$b = 5;

for ($a = 0; $a <= 10; $a++) {
    echo "<br>$a";

    if ($a < $b) {
        echo " - passé";
    }
}

// on défini les données dans le php
$fruits = ['salade', 'tomate', 'kiwi', 'oignon'];

// normalement on ferme pas le php mais ici c'est pour l'exemple
?>


<!-- simulation du fichier TEMPLATE.PHTML -->

<ul>
    <!-- il n'y a plus d'accolades que des : et des endXXX (endfor, endif...) -->
    <?php foreach ($fruits as $fruit): ?>

        <!-- on ouvre et on ferme les balise php sur chaque ligne -->
        <?php if ($fruits != "kiwi"): ?>

            <!-- on indente les blocs php et html en suivant la même logique -->
            <li>

                <!-- syntaxe alternative du >?php echo $fruit ?< -->
                <?= $fruit ?>
            </li>

            <!-- on ferme avec l'écriture alternative -->
        <?php endif; ?>
        <!-- toujours pas de bloc multiligne en php -->
    <?php endforeach; ?>
</ul>


