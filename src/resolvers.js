import { tasks } from "./sample";
import User from "./models/User";
import { createSourceEventStream } from "graphql";

export const resolvers = {
  Query: {
    hello: () => {
      return "Hello World with GraphQL";
    },
    greet(root, { name }, ctx) {
      console.log(ctx);
      return `Hello! ${name}`;
    },
    tasks() {
      return tasks;
    },
    async users() {
      const Users = await User.find();
      return Users;
    },
  },
  Mutation: {
    createTask(_, { input }) {
      input._id = tasks.length;
      tasks.push(input);
      return input;
    },
    async createUser(_, { input }) {
      const newUser = new User(input);
      await newUser.save();
      console.log(newUser);
      return newUser;
    },
    async deleteUser(_, { _id }) {
      const deleteUser = await User.findByIdAndDelete(_id);
      return deleteUser;
    },
    async updateUser(_, { _id, input }) {
      const updateUser = await User.findByIdAndUpdate(_id, input, {
        new: true,
      });
      return updateUser;
    },
  },
};
