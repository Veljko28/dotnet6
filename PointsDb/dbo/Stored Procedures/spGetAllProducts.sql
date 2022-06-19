CREATE PROCEDURE [dbo].[spGetAllProducts]
AS
begin
	SELECT * FROM [dbo].[Products];
end