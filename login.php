<?php 

$host = 'localhost';
$uu = 'root';
$pass = "";
$dbname = "mysql";
$conn = new mysqli($host,$uu,$pass,$dbname);
if($conn -> connect_error)
    die("connection unset" .$conn->connect_error);
// else
    // echo "connection successful" ."<br>";


if(isset($_POST['submit'])){
    $username = $_POST['username'];
    $password = $_POST['password'];

    $sql = "select * from users where username = '$username' and password='$password';";
    $result = $conn -> query($sql);

    $row = $result -> fetch_assoc();  
    if($result -> num_rows > 0){
        $resultPassword = $row['password'];
        $resultUsername = $row['username'];
        if($password == $resultPassword && $username == $resultUsername){
            header('Location:index2.html');
        }
        else{
            echo "no user found...";
        }

    }
    
}

$conn -> close();

?>
