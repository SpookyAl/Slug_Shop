import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  SuccessResponse,
} from "tsoa";
import { User } from "./user";
import { UsersService, UserCreationParams } from "./usersService";
import logger from "../logger";

@Route("users")
export class UsersController extends Controller {
  @Get("{userId}")
  public async getUser(
    @Path() userId: string,
  ): Promise<User | undefined> {
    logger.error(`userId: ${userId}`);
    return await new UsersService().get(userId);
  }

  // @SuccessResponse("201", "Created") // Custom success response
  // @Post()
  // public async createUser(
  //   @Body() requestBody: UserCreationParams
  // ): Promise<void> {
  //   this.setStatus(201); // set return status 201
  //   new UsersService().create(requestBody);
  //   return;
  // }
}