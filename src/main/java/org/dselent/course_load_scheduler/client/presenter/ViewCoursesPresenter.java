package org.dselent.course_load_scheduler.client.presenter;

import java.util.List;

import org.dselent.course_load_scheduler.client.model.CourseInfo;

public interface ViewCoursesPresenter extends BasePresenter {
	//add functions that we need besides the basePresenter interface stuff!
	
	//function that determines how many entries for courses we will need?
	//would it create the xml and pass it in as well?
	
	
	//gets information about courses to fill the page with
	public List<CourseInfo> retrieveCourses();
	
}
