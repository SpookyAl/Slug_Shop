import {Body, Controller, Get, Path, Post, Route, SuccessResponse,} from "tsoa";
import {User, UserCreationParams} from "./user";
import {UsersService} from "./usersService";
import logger from "../logger";

@Route("users")
export class UsersController extends Controller {
  @Get("{userId}")
  public async getUser(
    @Path() userId: string,
  ): Promise<User> {
    logger.info(`Getting user with userId: ${userId}`);

    try {
      return await new UsersService().get(userId);
    } catch (e) {
      this.setStatus(404);
      logger.error(e);
    }

    // Return an empty object to avoid returning null
    return {} as User;
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