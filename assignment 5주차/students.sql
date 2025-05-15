CREATE TABLE Students (
    serial_number INT NOT NULL,
    name VARCHAR(50) NOT NULL,
    admission_year INT NOT NULL,
    major INT NOT NULL,
    phone_number VARCHAR(15),
    address VARCHAR(100),
    total_credits INT DEFAULT 0,
    gpa FLOAT DEFAULT 0.0,
    is_enrolled BOOLEAN DEFAULT TRUE.
    PRIMARY key (admission_year,major,serial_number)
);