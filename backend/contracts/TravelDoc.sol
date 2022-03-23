// SPDX-License-Identifier: MIT
// pragma solidity >=0.5.1;
pragma solidity >=0.7.4;

contract TravelDoc {
    struct user {
        uint userId;
        string name;
        string dob;
    }

    struct doc_driving_dl {
        string dochash;
        string id;
        string validity;
        bool valid;
    }

    struct doc_rc {
        string dochash;
        string id;
        string validity;
        string regDate;
        string chassisNo;
        string engineNo;
        string model;
        string seat;
        bool valid;
    }

    struct doc_insurance {
        string dochash;
        string id;
        string validity;
        bool valid;
    }

    struct doc_puc {
        string dochash;
        string id;
        string validity;
        bool valid;
    }

    event dladded(bool status);
    event rcadded(bool status);
    event pucadded(bool status);
    event insuranceadded(bool status);

    mapping(address => uint) users;
    mapping(uint => doc_driving_dl) doc_array_driving_dl; 
    mapping(uint => doc_rc) doc_array_rc;
    mapping(uint => doc_insurance) doc_array_insurance;
    mapping(uint => doc_puc) doc_array_puc;
    mapping(uint => user) user_detail_array;
    mapping(uint => bool) public verified;

    uint total_user_count;

    function registerUser(string memory name,string memory dob) public returns(uint id) {
        total_user_count++;
        users[msg.sender]=total_user_count;
        user_detail_array[total_user_count] = user(total_user_count,name,dob);
        verified[total_user_count] = false;
        return total_user_count;
    }

     function testcontract() public pure returns(string memory){
        return "Contract Connected";
    }

    function getId() public view returns(uint id) {
            id = users[msg.sender];
            return id;
    }

    function add_rc( string memory _dochash,
        string memory _id,
        string memory _validity,
        string memory _regDate,
        string memory _chassisNo,
        string memory _engineNo,
        string memory _model,
        string memory _seat) public returns(bool ok) {
            doc_array_rc[users[msg.sender]] = doc_rc(_dochash,_id,_validity,_regDate,_chassisNo,_engineNo,_model,_seat,true);
            emit rcadded(true);
            return true;
        }

    function add_driving(string memory _dochash,
        string memory _id,
        string memory _validity) public returns(bool ok) {
            doc_array_driving_dl[users[msg.sender]] = doc_driving_dl(_dochash,_id,_validity,true);
            emit dladded(true);
            return true;
        } 

    function add_puc( string memory _dochash,
        string memory _id,
        string memory _validity) public returns(bool ok) {
            doc_array_puc[users[msg.sender]] = doc_puc(_dochash,_id,_validity,true);
            emit pucadded(true);
            return true;
        }

    function add_insurance( string memory _dochash,
        string memory _id,
        string memory _validity) public returns(bool ok) {
            doc_array_insurance[users[msg.sender]] = doc_insurance(_dochash,_id,_validity,true);
            emit insuranceadded(true);
            return true;
        }

    function setVerified() public returns(bool ok) {
        if(doc_array_driving_dl[users[msg.sender]].valid == true && 
           doc_array_insurance[users[msg.sender]].valid == true && 
           doc_array_rc[users[msg.sender]].valid == true && 
           doc_array_puc[users[msg.sender]].valid == true 
        ) {
            verified[users[msg.sender]] = true;
            return true;
        } else {
            return false;
        }
    }

    function verify() public view returns(bool ok) {
        return verified[users[msg.sender]];
    }


    function get_user_details(uint id) public view returns(uint ,string memory, string memory) {
        user storage u = user_detail_array[id];
        return (u.userId,u.name,u.dob);
    }

    function get_rc_details(uint id) public view returns(string memory, string memory, string memory) {
        doc_rc storage u = doc_array_rc[id];
        return (u.dochash,u.id,u.validity);
    }

    function get_puc_details(uint id) public view returns(string memory, string memory, string memory) {
        doc_puc storage u = doc_array_puc[id];
        return (u.dochash,u.id,u.validity);
    }

    function get_insurance_details(uint id) public view returns(string memory,string memory, string memory) {
        doc_insurance storage u = doc_array_insurance[id];
        return (u.dochash,u.id,u.validity);
    }

    function get_dl_details(uint id) public view returns(string memory, string memory, string memory) {
        doc_driving_dl storage u = doc_array_driving_dl[id];
        return (u.dochash,u.id,u.validity);
    }

}