const verifyRoles = (...allowedRoles) =>{
    return (req, res, next) =>{
        userRole = Object.values(req.user)[0].role;
        if(!userRole) return res.status(401).json({
            status: "FAIL",
            message: "you don't have role",
          });
        const rolesArray = [...allowedRoles];
        const result = rolesArray.includes(userRole);
        if(!result) return res.status(401).json({
            status: "FAIL",
            message: "you don't have permission",
          });
        next();
    }
}

module.exports = verifyRoles