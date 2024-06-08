<?php
// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve the email address from the form
    $email = $_POST["email"];

    // Check if the email already exists in the database
    $servername = "sql109.infinityfree.com"; // Change this to your server name
    $username = "if0_36416985"; // Change this to your MySQL username
    $password = "e40HCOluGV3"; // Change this to your MySQL password
    $dbname = "if0_36416985_db"; // Change this to your database name

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Check if email already exists
    $stmt = $conn->prepare("SELECT email FROM subscribers WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();
    if ($stmt->num_rows > 0) {
        // Email already exists in the database
        echo "exists";
    } else {
        // Email does not exist, insert into database
        $stmt = $conn->prepare("INSERT INTO subscribers (email) VALUES (?)");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        header("Location: redirect.html");
        exit(); // Ensure script stops here after redirect
    }

    // Close connections
    $stmt->close();
    $conn->close();
}
?>
