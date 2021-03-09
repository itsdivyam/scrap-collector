module.exports = {
  signUpUser : signUpUser
};

function signUpUser(req, res){
    console.log(req.body);
    res.send(req.body);
}
