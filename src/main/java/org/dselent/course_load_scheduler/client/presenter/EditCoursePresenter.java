package org.dselent.course_load_scheduler.client.presenter;

import java.util.List;

import org.dselent.course_load_scheduler.client.model.Frequency;

public interface EditCoursePresenter  extends BasePresenter{
	//helpful functions, like managing event requests to move to different pages and loading information into the dropdowns
	
	//parent info
	public IndexPresenter getParentPresenter();
	public void setParentPresenter(IndexPresenter parentPresenter);
	
	public List<Frequency> retrieveFequencies();//gets values from DB
	public void fillFrequencies();//puts them into view
	
	public void returnToViewCourses();
	
	//send course to the DB to update. True if update successful, false otherwise
	public boolean submitCourseEdit();
	
	//gets the sections for this course and fills the list with them
	public void fillSections();
	
	//section methods
	public void removeSection();
	public void loadEditSectionPage();
	public void loadAddSectionPage();
	
}
