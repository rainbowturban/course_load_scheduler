package org.dselent.course_load_scheduler.client.network;

public final class NetworkRequestStrings
{
	public static final String SERVER_LOCATION = "http://localhost:8080/";
	public static final String BASE_REQUEST = "course_load_scheduler/";
	public static String LOGIN = "user/login";
	public static String CREATE_ACCOUNT = "user/create";
	public static String NEW_COURSE = "course/create";
	public static String EDIT_COURSE = "course/edit";
	public static String REMOVE_COURSE = "course/remove";
	public static String NEW_SECTION = "section/add";
	public static String REMOVE_SECTION = "section/remove";
	public static String EDIT_SECTION = "section/edit";
	
	private NetworkRequestStrings() {};
}