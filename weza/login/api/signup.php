<?php
header('Content-Type: application/json');
require_once '../db_connect.php';

$data = json_decode(file_get_contents('php://input'), true);

if (!isset($data['name']) || !isset($data['email']) || !isset($data['password'])) {
    echo json_encode(['error' => 'Missing required fields']);
    exit;
}

$name = $data['name'];
$email = $data['email'];
$password = password_hash($data['password'], PASSWORD_DEFAULT);

try {
    $stmt = $pdo->prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");
    $stmt->execute([$name, $email, $password]);
    echo json_encode(['success' => true, 'message' => 'User registered successfully']);
} catch (\PDOException $e) {
    if ($e->getCode() == 23000) {
        echo json_encode(['error' => 'Email already exists']);
    } else {
        echo json_encode(['error' => 'Registration failed']);
    }
}