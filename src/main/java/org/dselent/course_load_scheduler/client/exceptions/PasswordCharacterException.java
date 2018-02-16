package org.dselent.course_load_scheduler.client.exceptions;

/**
 * Custom exception for when a password for a new account does not have a non-alphanumeric character
 * 
 * @author frcampanelli
 *
 */
public class PasswordCharacterException extends Exception
{

	private static final long serialVersionUID = 3L;
	
	public PasswordCharacterException()
	{
		
	}

}
