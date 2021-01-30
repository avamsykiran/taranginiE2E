package com.tarangini.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PackageRepo extends JpaRepository<Package, String>{

}
