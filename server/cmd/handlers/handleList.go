package handlers

import (
	"myapp/cmd/models"
	"myapp/cmd/repositories"
	"net/http"

	"github.com/labstack/echo/v4"
)

func CreateList(c echo.Context) error {
	list := models.List{}
	c.Bind(&list)
	newList, err := repositories.CreateList(list)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}
	return c.JSON(http.StatusCreated, newList)
}
