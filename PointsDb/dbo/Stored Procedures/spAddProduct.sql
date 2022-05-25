CREATE PROCEDURE [dbo].[spAddProduct]
	@Name NVARCHAR(100),
	@Description NVARCHAR(256),
	@Image NVARCHAR(256),
	@Cost MONEY,
	@Amount INT
AS
begin
	INSERT INTO [dbo].[Products] VALUES (@Name,@Description,@Image,@Cost,@Amount);
end