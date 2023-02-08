package com.example.ogani.model.request;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UpdateProfileRequest {

    private String username;

    private String firstname;

    private String lastname;

    private String email;

    private String country;

    private String state;

    private String address;

    private String phone;
}
