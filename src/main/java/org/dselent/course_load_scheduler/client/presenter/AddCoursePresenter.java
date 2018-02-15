package org.dselent.course_load_scheduler.client.presenter;

import org.dselent.course_load_scheduler.client.model.Courses;

public interface AddCoursePresenter extends BasePresenter{
	//helpful functions, like managing event requests to move to different pages and loading information into the dropdowns
	
	//parent info
	public IndexPresenter getParentPresenter();
	public void setParentPresenter(IndexPresenter parentPresenter);
	
	public void fillFrequencies();
	
	public void returnToViewCourses();
	
	public boolean submitNewCourse(Courses newCourse);
}
