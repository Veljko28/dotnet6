CREATE PROCEDURE [dbo].[spFindUser]
	@UserName NVARCHAR(150) NOT NULL
AS
begin
	SELECT * FROM [dbo].[Users] WHERE UserName = @UserName;
end