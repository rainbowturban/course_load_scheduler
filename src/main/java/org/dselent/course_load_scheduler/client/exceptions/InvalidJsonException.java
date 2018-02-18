package org.dselent.course_load_scheduler.client.exceptions;
 
 public class InvalidJsonException extends Exception
 {
 	private static final long serialVersionUID = 1L;
 
 	public InvalidJsonException(String message)
 	{
 		super(message);
 	}
}