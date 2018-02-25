package org.dselent.course_load_scheduler.client.network;

public final class NetworkRequestStrings
{
	public static final String SERVER_LOCATION = "http://localhost:8080/";
	public static final String BASE_REQUEST = "course_load_scheduler/";
	public static final String LOGIN = "user/login";
	public static final String CREATE_ACCOUNT = "user/create";
	public static final String NEW_COURSE = "course/create";
	public static final String EDIT_COURSE = "course/edit";
	public static final String REMOVE_COURSE = "course/remove";
	public static final String GET_START_TIMES ="time/view/start";
	public static final String NEW_SECTION = "section/add";
	public static final String REMOVE_SECTION = "section/remove";
	public static final String EDIT_SECTION = "section/edit";
	public static final String GET_ALL_SECTIONS = "section/view";
	public static final String GET_COURSE_LIST = "course/view/all";
	public static final String GET_FACULTY_LIST = "user/view/all";


	private NetworkRequestStrings() {};
}