import Subscribe from "../models/subscribe.mjs"



const allSubscribesUsers = async (req, res) => {
    const responce = await Subscribe.find({}).populate('User')
    res.json(responce)
}

const allSubcsribesUserById = async (req, res) => {
  const responce = await Subscribe.find({user_id: req.body.id})
  res.json(responce);
};

const setSubcsribe = async (req, res) => {
    const sub = new Subscribe(req.body)
    
    await sub.save()
    res.json(sub)
};

export default {allSubscribesUsers, allSubcsribesUserById, setSubcsribe}


