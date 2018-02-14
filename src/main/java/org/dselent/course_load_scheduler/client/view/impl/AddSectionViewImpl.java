package org.dselent.course_load_scheduler.client.view.impl;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.TextBox;

public class AddSectionViewImpl extends Composite {

	private static AddSectionViewImplUiBinder uiBinder = GWT.create(AddSectionViewImplUiBinder.class);
	@UiField Label termLabel;
	@UiField Label addSectionTitle;
	@UiField Label generatedNameLabel;
	@UiField Label generatedCRNLabel;
	@UiField Label sectionTypeLabel;
	@UiField Label sectionLengthLabel;
	@UiField ListBox termComboBox;
	@UiField TextBox generatedNameTextBox;
	@UiField TextBox generatedCRNTextBox;
	@UiField ListBox sectionTypeComboBox;
	@UiField ListBox sectionLengthComboBox;

	interface AddSectionViewImplUiBinder extends UiBinder<Widget, AddSectionViewImpl> {
	}

	public AddSectionViewImpl() {
		initWidget(uiBinder.createAndBindUi(this));
	}

}
