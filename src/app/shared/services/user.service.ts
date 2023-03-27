import { Injectable } from "@angular/core";
import { user } from "@angular/fire/auth";
import { Database, DataSnapshot, get, ref, set } from '@angular/fire/database';
import { Observable, of } from "rxjs";
import { User } from "../models/user";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private dbBasePath: string = '/users/';
    private dbPath: string = '';
    
    constructor(private db: Database, private auth: AuthService) {
    }

    setPath() {
        let uid = localStorage.getItem("uid");
        this.dbPath = this.dbBasePath + uid;
    }

    createUser() {
        let user: User = new User();
        user.uid = this.auth.currentUser?.uid ? this.auth.currentUser.uid : "";
        user.name = this.auth.currentUser?.displayName ? this.auth.currentUser.displayName : "";
        user.coins = 100;
        this.setPath();
        console.log(this.dbPath);
        set(ref(this.db, this.dbPath), user);
    }

    getUser(): Promise<DataSnapshot> {
        this.setPath();
        const dbRef = ref(this.db, this.dbPath);
        console.log(this.dbPath);
        return get(dbRef);
    }

    // update data
    // update(ref(this.database, 'users/' + value.username), {
    //   // username: value.username,
    //   first_name: value.first_name,
    //   last_name: value.last_name
    // });
    // alert('user updated!'); 

    // updateCoins(value: number): Promise<void> {
    //     return //TODO
    // }
}
