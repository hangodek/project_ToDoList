package main

import (
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"myapp/cmd/handlers"
	"myapp/cmd/storage"
)

func main() {
	e := echo.New()

	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"http://localhost:3000"},
		AllowHeaders: []string{echo.HeaderOrigin, echo.HeaderContentType, echo.HeaderAccept},
	}))

	e.GET("/", handlers.Home)

	storage.InitDB()

	e.GET("/list", handlers.ReadLists)
	e.POST("/list", handlers.CreateList)
	e.PUT("/list/:id", handlers.UpdateList)
	e.DELETE("/list/:id", handlers.DeleteList)

	e.Logger.Fatal(e.Start(":8080"))
}
