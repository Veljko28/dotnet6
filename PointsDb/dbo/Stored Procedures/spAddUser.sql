CREATE PROCEDURE [dbo].[spAddUser]
	@UserName NVARCHAR(150),
	@Email NVARCHAR(100),
	@Password NVARCHAR(256),
	@Points INT
AS
begin
	INSERT INTO [dbo].[Users] VALUES (@UserName, @Email, @Password, @Points);
end
