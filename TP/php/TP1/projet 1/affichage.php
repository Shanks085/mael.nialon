<html>
    <body>
        <?php
        @include("connextion.php");
        $requete="select * from livres";
        $resultat=mysqli_query($conn,$requete);
        ?>

        <center><table border="1">
            <tr><td>code livres</td><td> genre</td><td> page</td></tr>
            <?php while($enreg=mysqli_fetch_array($resultat))
            {?>
            <tr>
            <td><?php echo $enreg["Reference_livre"];?></td>
            <td><?php echo $enreg["Genre"];?></td>
            <td><?php echo $enreg["Nbre_pages"];?></td>
            <?php }?>
        </table></center>
        <?php
            mysqli_close($conn);?>
    </body>
</html>

