package main

import (
	"net/http"

	"github.com/labstack/echo/v4"

	"myapp/controller"
)

func main() {
	e := echo.New()
	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello, Worldddd!")
	})

	e.GET("/another", controller.GetAnotherPageWithoutName)
	e.GET("/another/:name", controller.GetAnotherPageWithName)
	e.POST("/another", controller.PostAnotherPageWithoutName)

	e.Logger.Fatal(e.Start(":1323"))

}
