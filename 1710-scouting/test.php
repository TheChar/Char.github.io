<?
printf("Hello World<br/>");



$dbh=mysql_connect ("localhost", "mattbzco_779ccb2", "$tr0ngH0ld!")
or die ('I cannot connect to the database.');
mysql_select_db ("mattbzco_Scouting");

// Attempt select query execution
$sql = "SELECT * FROM test";
if($result = mysqli_query($dbh, $sql)){
    if(mysqli_num_rows($result) > 0){
        echo "<table>";
            echo "<tr>";
                echo "<th>Name</th>";
            echo "</tr>";
        while($row = mysqli_fetch_array($result)){
            echo "<tr>";
                echo "<td>" . $row['Name'] . "</td>";
            echo "</tr>";
        }
        echo "</table>";
        // Free result set
        mysqli_free_result($result);
    } else{
        echo "No records matching your query were found.";
    }
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}
 

?>