package main

import (
	"github.com/labstack/echo/v4"
	"myapp/cmd/handlers"
	"myapp/cmd/storage"
)

func main() {
	e := echo.New()

	e.GET("/", handlers.Home)

	storage.InitDB()

	e.POST("/list", handlers.CreateList)
	e.PUT("/list/:id", handlers.UpdateList)
	e.DELETE("/list/:id", handlers.DeleteList)

	e.Logger.Fatal(e.Start(":8081"))
}
