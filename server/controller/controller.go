package controller

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

func GetAnotherPageWithName(c echo.Context) error {
	name := c.Param("name")
	return c.String(http.StatusOK, "Hello "+name)
}

func GetAnotherPageWithoutName(c echo.Context) error {
	return c.String(http.StatusOK, "This is Another Page")
}

func PostAnotherPageWithoutName(c echo.Context) error {
	username := c.FormValue("username")
	password := c.FormValue("password")
	return c.String(http.StatusOK, "Username is "+username+" and Passowrd is "+password)
}
