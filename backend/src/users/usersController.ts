import {Body, Controller, Get, Path, Post, Route, Security, SuccessResponse,} from "tsoa";
import {Role, User, UserCreationParams} from "./user";
import {UsersService} from "./usersService";
import logger from "../logger";

@Route("users")
export class UsersController extends Controller {
  @Get("{userId}")
  public async getUser(
    @Path() userId: string,
  ): Promise<User> {
    try {
      return await new UsersService().get(userId);
    } catch (e) {
      this.setStatus(404);
      logger.error(e);
    }

    // Return an empty object to avoid returning null
    return {} as User;
  }

  @Get()
  @Security("jwt", ["admin"])
  public async getAllUsers(): Promise<User[]> {
    return await new UsersService().getAll();
  }

  @SuccessResponse("201", "Created") // Custom success response
  @Post()
  public async createUser(
    @Body() requestBody: UserCreationParams
  ): Promise<User> {

    try {
      this.setStatus(201);
      return await new UsersService().create(requestBody);
    } catch (e) {
      logger.error(e);
      this.setStatus(500);
    }

    return {} as User;
  }
}