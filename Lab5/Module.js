const module = {
    id: 1, 
    name: "Capstone",
    description: "Probably the thing that will take up all your waking hours :)", 
    course: "IS4444"
  };
  export default function Module(app) {
    app.get("/lab5/module", (req, res) => {
      res.json(module);
    });
    app.get("/lab5/module/name", (req, res) => {
        res.json(module.name);
    });
    app.get("/lab5/module/name/:newName", (req, res) => {
        const { newName } = req.params;
        module.name = newName;
        res.json(module);
    });    
  };
  