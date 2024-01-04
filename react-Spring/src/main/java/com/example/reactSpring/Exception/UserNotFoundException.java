package com.example.reactSpring.Exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long id) {
        super("User Not Found !!");
    }
}
