package router
import (
	"github.com/gin-gonic/gin"
	"thirdparty/controllers"
)

func initHtml(router *gin.Engine)  {
	router.LoadHTMLGlob("assets/*.html")

	router.GET("/", controllers.IndexController)
}
