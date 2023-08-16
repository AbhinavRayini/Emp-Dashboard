package com.hitachi.springjpademo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "employees2")
public class Employee {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
@Column
    private String first_name;
 @Column
    private String last_name;
 @Column
 private String email;
 @Column
 private String department;

    public Employee() {}

    public Employee(String first_name , String last_name, String email, String department) {
        this.first_name= first_name;
        this.last_name = last_name;
        this.email = email;
        this.department=department;
    }
    public long getId() {
        return id;
    }
   

    @Column(name = "first_name", nullable = false)
    public String getFirstName() {
        return first_name;
    }
    public void setFirstName(String first_name) {
        this.first_name= first_name;
    }

    @Column(name = "last_name", nullable = false)
    public String getLastName() {
        return last_name;
    }
    public void setLastName(String last_name) {
        this.last_name = last_name;
    }

    @Column(name = "email", nullable = false)
    public String getEmailId() {
        return email;
    }
    public void setEmailId(String email) {
        this.email = email;
    }
    @Column(name = "department", nullable = false)
    public String getDepartment() {
        return department;
    }
    public void setDepartment(String department) {
        this.department = department;
    }

    @Override
    public String toString() {
        return "Employee [id=" + id + ", first_name" + first_name+ ", last_name=" + last_name + ", email=" + email+",department" + department
                + "]";
    }

}