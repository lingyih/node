exports.index=function (req,res) {
    res.render('./index.html',{
        use:req.session.use
    });
};