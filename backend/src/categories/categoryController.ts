// src/users/usersController.ts
import {
    Controller,
    Get,
    Path,
    Post,
    Query,
    Route,
    SuccessResponse,
} from "tsoa";
import {CategoryService} from "./categoryService";

//import correct paths


@Route("category")
export class CategoryController extends Controller {
    @Get("{userId}")
  public async getCategory(
      @Path() userId: number,
      @Query() name?: string
      ): Promise<void> {
        return new CategoryService().get();
    }

    @SuccessResponse("201", "Created") // Custom success response
  @Post()
  public async createCategory(

      ): Promise<void> {
        this.setStatus(201); // set return status 201
        new CategoryService().create();
        return;
    }
}