package org.dselent.course_load_scheduler.client.presenter.impl;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.dselent.course_load_scheduler.client.gin.Injector;
import org.dselent.course_load_scheduler.client.model.Courses;
import org.dselent.course_load_scheduler.client.model.Frequency;
import org.dselent.course_load_scheduler.client.presenter.EditCoursePresenter;
import org.dselent.course_load_scheduler.client.presenter.IndexPresenter;
import org.dselent.course_load_scheduler.client.view.EditCourseView;

import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.HasWidgets;
import com.google.gwt.user.client.ui.ListBox;
import com.google.inject.Inject;

public class EditCoursePresenterImpl extends BasePresenterImpl implements EditCoursePresenter{
	//implementations of the helpful functions from the interface
	
	private IndexPresenter parentPresenter;
	private EditCourseView view;
	
	
	@Inject
	public EditCoursePresenterImpl(IndexPresenter parentPresenter, EditCourseView view)
	{
		this.view = view;
		this.parentPresenter = parentPresenter;
		view.setPresenter(this);
		
		//fill the dropdown box
		fillFrequencies();
		fillSections();
		
	}
	
	@Override
	public void init()
	{
		bind();
	}

	@Override
	public void bind()
	{
		HandlerRegistration registration;
		
		//TODO: implement event listeners down here
		//registration = eventBus.addHandler(InvalidLoginEvent.TYPE, this);
		//eventBusRegistration.put(InvalidLoginEvent.TYPE, registration);
	}
	
	@Override
	public void go(HasWidgets container) {
		container.clear();
		container.add(view.getWidgetContainer());
	}

	//returns the view for the presenter
	@Override
	public EditCourseView getView() {
		return view;
	}
	
	//parent info
	@Override
	public IndexPresenter getParentPresenter()
	{
		return parentPresenter;
	}
	@Override
	public void setParentPresenter(IndexPresenter parentPresenter)
	{
		this.parentPresenter = parentPresenter;
	}
	
	//gets values from DB 
	@Override
	public List<Frequency> retrieveFequencies() {
		
		//TODO: fetch frequencies from the DB
		//**In place of that, sample values are used
		List<Frequency> freqs = new ArrayList<Frequency>();
		
		Frequency f1 = new Frequency();
		f1.setFrequency("1 per year");
		f1.setId(1);
		
		Frequency f2 = new Frequency();
		f2.setFrequency("2 per year");
		f2.setId(2);
		
		Frequency f3 = new Frequency();
		f3.setFrequency("4 per year");
		f3.setId(4);
		
		freqs.add(f1);
		freqs.add(f2);
		freqs.add(f3);
		
		
		return freqs;
	}
	
	//gets the frequencies from the database and fills the dropdown with them. 
	@Override
	public void fillFrequencies() {
		List<Frequency> freqs = retrieveFequencies();

		ListBox box = view.getFrequencyDropdown();
		box.clear();
		
		Iterator<Frequency> iterator = freqs.iterator();
		
		
		while(iterator.hasNext()) {
			Frequency f = iterator.next();

			//add to frequency dropdown
			box.addItem(f.getFrequency(), Integer.toString(f.getId()));
		}
		
		//view.setFrequencyDropdown(box);
	}
	
	
	//gets the sections for this course and fills the list with them
	@Override
	public void fillSections() {
		//TODO: get sections and info from DB
		//TODO: What to do about sections not in schedule? They do not have a professor associated with them yet.
		//name in header
		//professor???
	}
	
	
	@Override
	public boolean submitCourseEdit() {
		Courses updatedCourse = new Courses();
		updatedCourse.setTitle(view.getCourseNameField().getText());
		updatedCourse.setNumber(view.getCourseNumberField().getText());
		updatedCourse.setFrequencyID(view.getFrequencyDropdown().getSelectedIndex());//TODO: dropdown id not necessarily equal to db id!!**
		
		
		int fIndex = view.getFrequencyDropdown().getSelectedIndex();
		
		if(fIndex >= 0) {
			//since index is valid, fill object
			Courses editCourse = new Courses();
			editCourse.setFrequencyID(Integer.parseInt(view.getFrequencyDropdown().getValue(fIndex)));
			editCourse.setTitle(view.getCourseNameField().getText());
			editCourse.setNumber(view.getCourseNumberField().getText());
			editCourse.setId(0);//TODO: Get courseID on main page and pass it to this page via event??
			
			//TODO: send out to DB to edit!
			Window.alert("If this accesses the DB, it would send a request to edit a course with Name: "+editCourse.getTitle() +
					", Number: "+editCourse.getNumber() + ", FrequencyId: " + editCourse.getFrequencyID());
			
			
			return true;//returns if course adding was successful or not
		}
		else {//Frequency was not selected
			Window.alert("A Freqeuncy must be selected to edit a course.");
			return false;
		}
		
	}
	
	
	@Override
	public void returnToViewCourses() {
		final Injector injector = Injector.INSTANCE;
		ViewCoursesPresenterImpl viewCoursePresenter = injector.getViewCoursesPresenter();
		viewCoursePresenter.init();
		viewCoursePresenter.go(parentPresenter.getView().getViewRootPanel());
	}
	
	//sends request to remove section from the DB.
	@Override
	public void removeSection() {
		//TODO: send request to database
		
		
	}
	
	@Override
	public void loadEditSectionPage() {
		//TODO: Make an event for this, to provide the name of the course and stuff, and the current section info
		
		final Injector injector = Injector.INSTANCE;
		/*EditSectionPresenterImpl editSectionPresenter = injector.getEditSectionPresenter();
		editSectionPresenter.init();
		editSectionPresenter.go(parentPresenter.getView().getViewRootPanel());*/
		Window.alert("Edit section didn't exist yet, when I wrote this, so the stuff is commented out for when it exists!");
		
	}
	
	@Override
	public void loadAddSectionPage() {
		//TODO: Make an event for this, to provide the name of the course and stuff
		
		final Injector injector = Injector.INSTANCE;
		AddSectionPresenterImpl addSectionPresenter = injector.getAddSectionPresenter();
		addSectionPresenter.init();
		addSectionPresenter.go(parentPresenter.getView().getViewRootPanel());
	}

}
