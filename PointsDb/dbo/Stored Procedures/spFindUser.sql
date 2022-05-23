CREATE PROCEDURE [dbo].[spFindUser]
	@UserName NVARCHAR(150)
AS
begin
	SELECT * FROM [dbo].[Users] WHERE UserName = @UserName;
end